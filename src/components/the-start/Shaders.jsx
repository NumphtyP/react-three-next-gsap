export const vs = `
        precision highp float;

        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        uniform mat4 planeTextureMatrix;

        // custom variables
        varying vec3 vVertexPosition;
        varying vec3 vOriginalVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        uniform float uScrollDelta;
        uniform float uScrollSensitivity;

        uniform float uNbFolds;
        uniform vec2 uFoldsCenter;
        uniform float uFoldsStrength;
        uniform float uWindStrength;

        uniform float uDampingTime;
        uniform float uDampingAngle;
        uniform float uDampingDecay;
        uniform float uUseDamping;

        #define PI 3.14159265


        void main() {
            vec3 vertexPosition = aVertexPosition;

            float time = uTime * 0.001;
            float dampedTime = uDampingTime * 0.007;

            float scrollEffect = clamp(uScrollDelta * uScrollSensitivity, -1.0, 1.0);
            float initDampingAngle = (clamp(uDampingAngle * uScrollSensitivity, -1.0, 1.0) + 1.0) * 0.5 * PI;

            float exponentialStrength = exp(-dampedTime * uDampingDecay);
            float dampedSineStrength = exponentialStrength * cos(PI * dampedTime + initDampingAngle);


            float windStrength = uFoldsStrength * max(abs(scrollEffect), exponentialStrength);

            float distanceFromRiddle = distance(vec2(uFoldsCenter.x, 0.0), vec2(vertexPosition.x, 0.0));

            float waveSinusoid = cos(uNbFolds * ((1.0 / (cos(distanceFromRiddle) - 2.0)) - time));
            waveSinusoid *= windStrength;

            vec2 edgeAttenuations = vec2(
                ((2.0 - abs(uFoldsCenter.x - vertexPosition.x)) * 0.5),
                (1.0 - cos(1.0 - (vertexPosition.y + 1.0) * 0.5))
            );
            edgeAttenuations.y = pow(edgeAttenuations.y, 1.05);

            float curtainEffect = waveSinusoid * edgeAttenuations.x * edgeAttenuations.y;

            float xDisplacement = sign(vertexPosition.x);

            // riddles
            vec2 riddles = vec2(curtainEffect * xDisplacement * 0.375, curtainEffect);


            // wind
            float windXAttenuation = cos((abs(vertexPosition.x - uFoldsCenter.x) * 0.5));
            windXAttenuation += (sin(vertexPosition.x * 3.141592) * 0.15);

            vec2 wind = vec2(
                pow(abs(dampedSineStrength), 1.75) * edgeAttenuations.y * windXAttenuation,
                dampedSineStrength * edgeAttenuations.y * windXAttenuation
            );

            vec2 scroll = vec2(
                pow(abs(scrollEffect), 1.75) * edgeAttenuations.y * windXAttenuation,
                -scrollEffect * edgeAttenuations.y * windXAttenuation
            );

            wind = mix(scroll, wind, uUseDamping);


            // applying the riddles
            vertexPosition.x += riddles.x;
            vertexPosition.z += riddles.y;

            // applying the wind / damped sine wave
            vertexPosition.y += wind.x;
            vertexPosition.z += wind.y;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            // varyings
            vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
            vVertexPosition = vertexPosition;
            vOriginalVertexPosition = aVertexPosition;
        }
    `

export const fs = `
        precision highp float;

        varying vec3 vVertexPosition;
        varying vec3 vOriginalVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D planeTexture;
        uniform float uLightIntensity;
        uniform float uOpacity;

        vec3 getNormal(vec3 pos, vec3 originalPos) {
            float diff = 0.25;
            vec3 neighbour1 = vec3(originalPos.x + diff, originalPos.y, originalPos.z);
            vec3 neighbour2 = vec3(originalPos.x, pos.y + diff, originalPos.z);
            vec3 tangent = (neighbour1 - pos);
            vec3 bitangent = (neighbour2 - pos);
            return normalize(cross(tangent, bitangent));
        }

        void main() {
            if(uOpacity == 0.0) {
                discard;
            }

            vec4 finalColor = texture2D(planeTexture, vTextureCoord);

            vec3 normal = getNormal(vVertexPosition, vOriginalVertexPosition);

            vec3 lightPos = normalize(vec3(0.3, 0.3, 1.0));
            float light = smoothstep(0.45, 1.0, dot(normal, lightPos));

            float lightStrength = uLightIntensity;
            float ambientLight = 1.0 - lightStrength;
            finalColor.rgb = finalColor.rgb * light * lightStrength + finalColor.rgb * ambientLight;
            
            if(1.0 - vTextureCoord.y > uOpacity) {
                discard;
            }

            gl_FragColor = finalColor;
        }
    `
