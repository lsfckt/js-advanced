function encodeAndDecodeMessages() {
    // The first one is to encode the given message and send it to the receiver. 

    const encodedArea = document.getElementsByTagName('textarea')[0];
    const decodedArea = document.getElementsByTagName('textarea')[1];
    const encodedBtn = encodedArea.nextSibling.nextSibling;
    const decodedBtn = decodedArea.nextSibling.nextSibling;

    encodedBtn.addEventListener('click', msgEncode);

    function msgEncode(e) {
        let msg = encodedArea.value.split('');
        let encodedArr = [];

        msg.forEach(char => {

            index = char.charCodeAt() + 1;
            char = String.fromCharCode(index);
            encodedArr.push(char);
        });

        decodedArea.value = encodedArr.join('');
        encodedArea.value = '';
    }

    decodedBtn.addEventListener('click', msgDecoded);

    function msgDecoded(e) {

        let decodedMsg = decodedArea.value.split('');
        let decodedArr = [];

        decodedMsg.forEach(char => {

            index = char.charCodeAt() - 1;
            char = String.fromCharCode(index);
            decodedArr.push(char);
        });

        decodedArea.value = decodedArr.join('');
    }
}