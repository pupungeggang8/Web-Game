function saveInit() {
    let data = localStorage.getItem('pupungeggang8mouse')

    if (data === null) {
        localStorage.setItem('pupungeggang8mouse', JSON.stringify([emptySave, emptySave, emptySave]))
    }

    sessionVar = JSON.parse(localStorage.getItem('pupungeggang8mouse'))
}

function saveData() {
    localStorage.setItem('pupungeggang8mouse', JSON.stringify(sessionVar))
}

function loadData() {
    sessionVar = JSON.parse(localStorage.getItem('pupungeggang8mouse'))
}

function resetData() {
    localStorage.setItem('pupungeggang8mouse', JSON.stringify([emptySave, emptySave, emptySave]))
    sessionVar = JSON.parse(localStorage.getItem('pupungeggang8mouse'))
}