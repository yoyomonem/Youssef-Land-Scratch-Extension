class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequality',
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[1] === [2]',
          arguments: {
            1: {
              type: Scratch.ArgumentType.STRING
            },
            2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        }
      ]
    };
  }

  strictlyEquals(args) {
    return args[1] === args[2];
  }
}

Scratch.extensions.register(new StrictEqualityExtension());
