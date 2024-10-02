function counterInitialize() {
    const targetDate = new Date('November 06, 2024 00:00:00').getTime()

    const counterInterval = setInterval(() => {
        const dateNow = new Date().getTime()
        const dateDifference = targetDate - dateNow

        const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((dateDifference % (1000 * 60)) / 1000)

        document.getElementById('contador').innerHTML = `<p> ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`

        if (dateDifference <= 0) {
            clearInterval(counterInterval)
            document.getElementById('contador').innerHTML = "Chegou o dia \n <p>Parabéns Lucas pelo seu aniversário!!!<p>"
            document.querySelector('.hero__cake').style.display = 'block'
            document.querySelector('.hero__text').style.display = 'none'
            document.querySelector('.hero__logo').style.display = 'none'
            
            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(0, 0, 0, 0)
            const tomorrowDifference = tomorrow.getTime() - dateNow
            setTimeout (counterInitialize, tomorrowDifference)
        }
    })
}

counterInitialize()
