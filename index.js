
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


        const now = new Date();
        const formattedTime = now.toLocaleTimeString();



        const cardContaner = getElement('card-contaner')

        const addHistory = document.createElement('div')
        addHistory.innerHTML = `
        <div id="card-contaner" class="bg-[#FAFAFA] w-[300px] h-[86px] p-5 flex justify-between items-center">
                    <div>
                        <h1>${cardTital2}</h1>
                        <p>${emergencyContact}</p>
                    </div>
                    <p>${formattedTime}</p>
                </div>
          
        `
        cardContaner.append(addHistory)







    })
}
getElement('clear').addEventListener("click", function () {
    let clearDiv = getElement("card-contaner")
    clearDiv.innerText = " ";
})

//   copy btn function is state 


const cops = document.getElementsByClassName('fa-copy')

for (const copy of cops) {
    copy.addEventListener('click', function () {
        let copycount = 1;
        const totalCopy = document.getElementById('copycount').innerText
        let carrtentTotalCopy = copycount + Number(totalCopy);
        document.getElementById('copycount').innerText = carrtentTotalCopy


        const EmergencyNumberCopy = copy.parentNode.parentElement.parentNode.childNodes[7].innerText
        navigator.clipboard.writeText(EmergencyNumberCopy)
            .then(() => {
                alert('নম্বর কপি হয়ে গেছে ✅' + "" + EmergencyNumberCopy);
            })

    })
}


