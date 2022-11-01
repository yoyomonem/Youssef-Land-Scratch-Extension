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
                    "opcode": "sayTextForSecs",
                    "blockType": "command",
                    "text": "say [text] for (secs) secs",
                    "arguments": {
                        "text": {
                            "type": "string",
                            "defaultValue": "Hello!"
                        },
                        "secs": {
                            "type": "number",
                            "defaultValue": 2
                        }
                    }
                }
            ]
        };
    }
}
Scratch.extensions.register(new ScratchYL());
