#version 300 es
precision mediump float;

uniform vec2 u_resolution;
out vec4 fragColor;
void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    float edge = 0.5;
    vec3 color = vec3(step(edge, pos.x));
    fragColor = vec4(color, 1.0);
}