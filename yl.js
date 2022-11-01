class ScratchYL {
    constructor(){
        /* nothing to add here */
    }
    getData(){
        return {
            "id": "YL-1-0",
            "name": "Youssef Land for Scratch (extension version 1.0)",
            "blocks": [
                {
                    "opcode": "whenFlagClicked",
                    "blockType": "hat",
                    "text": "when the green flag is clicked"
                },
                {
                    "opcode": ""
                }
            ]
        };
    }
}
Scratch.extensions.register(new ScratchYL());
