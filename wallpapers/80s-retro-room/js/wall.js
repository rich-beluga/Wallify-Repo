window.WallManager = {
  // 0: винтажные вертикальные полосы, 1: ромбовидная сетка (trellis)
  patternType: 0,
  density: 32.0,
  stripesContrast: 0.18,

  setPattern(type) {
    this.patternType = type;
  },

  applyUniforms(gl, locPattern, locDensity) {
    if (locPattern) gl.uniform1i(locPattern, this.patternType);
    if (locDensity) gl.uniform1f(locDensity, this.density);
  }
};
