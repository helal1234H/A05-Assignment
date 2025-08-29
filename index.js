
// Heart Icons Functionalities
const icon = document.getElementsByClassName('hard-icon')
let count = 0;
for (const icons of icon) {
    icons.addEventListener("click", function () {
        count++;
        document.getElementById('hard-btn').innerText = count;

    })

}



//  Call icon functionalities


function getElement(id) {
    const element = document.getElementById(id);
    return element;

}


const cardBtns = document.getElementsByClassName('call-btn')




for (let cardBtn of cardBtns) {
    cardBtn.addEventListener('click', function () {
        const cardTitel = cardBtn.parentNode.parentNode.childNodes[5].innerText;

        const emergencyContact = cardBtn.parentNode.parentNode.childNodes[7].innerText;
        const cardTital = getElement('alart').innerText
        const cardTital2 = cardBtn.parentNode.parentNode.childNodes[3].innerText

        alert(cardTitel + "  " + emergencyContact)

        let count = 20;

        const coin = parseInt(document.getElementById('coin-icon').innerText)
        if (coin < count) {
            alert(' আপনার পরজাপ্ত ব্যালেন্স নাই')
            return;

        }


        let carrintCion = coin - count;

        document.getElementById('coin-icon').innerText = carrintCion;






        const cardContaner = getElement('card-contaner')

        const addHistory = document.createElement('div')
        addHistory.innerHTML = `
        <div id="card-contaner" class="bg-[#FAFAFA] w-[300px] h-[86px] p-5">
                <h1>${cardTital2}</h1>
                <p>${emergencyContact}</p>
            </div>

        `
        cardContaner.append(addHistory)






    })
}
getElement('clear').addEventListener("click", function () {
    let clearDiv = getElement("card-contaner")
    clearDiv.innerText = " ";
})


