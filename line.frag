#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_spec;
uniform float u_time;
out vec4 fragColor;
void main() {
    // NOTE: u_spec is audio input
    vec2 spec = vec2(sin(u_time * 4.0)); // TODO: usevalue from u_spec
    spec *= 0.5;
    vec2 uv = 2.0 * (gl_FragCoord.xy / u_resolution.xy) - 1.0;
    float col = 0.0;

    uv.x += sin(u_time * 9.0 + uv.y * 0.4);
    col += abs(1.0 / uv.x) * spec.y;
    fragColor = vec4(col, col, col, 1.0);
}