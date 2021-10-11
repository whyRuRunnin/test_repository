function reply_click(checkedId) {
    var numList = ["1", "2", "3"];
    const x = Math.floor(Math.random() * numList.length);
    if (checkedId == numList[x]) {
        console.log("Butonul este castigator");
    } else {
        console.log("Butonul nu este castigator");
    }
}