#version 300 es
precision mediump float;

uniform vec2 u_resolution;
out vec4 fragColor;
void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    vec2 edge = vec2(0.5);
    float colorValue = abs(step(edge.x, pos.x) - step(edge.y, pos.y));
    vec3 color = vec3(colorValue);
    fragColor = vec4(color, 1.0);
}