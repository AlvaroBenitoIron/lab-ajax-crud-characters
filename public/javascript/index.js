const charactersAPI = new APIHandler();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let text = ""

    function showMinions() {
      charactersAPI
        .getFullList()
        .then(response => {
          response.data.forEach(minion => {
            text += `<div class="character-info">
              <div class="id">Id: ${minion.id}</div>
              <div class="name">Character Name: ${minion.name}</div>
              <div class="occupation">Character Occupation: ${minion.occupation}</div>
              <div class="cartoon">Is a Cartoon?: ${minion.cartoon}</div>
              <div class="weapon">Character Weapon: ${minion.weapon}</div>
            </div>`
            document.querySelector('.characters-container').innerHTML = text
          })
        })
        .catch(err => console.log(err))
    }

    showMinions()

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const id = document.querySelector('.operation input').value
    let text = ""

    function oneMinion(minionId) {
      charactersAPI
        .getOneRegister(minionId)
        .then(minion => {
          text += `<div class="character-info">
              <div class="id">Id: ${minion.data.id}</div>
              <div class="name">Character Name: ${minion.data.name}</div>
              <div class="occupation">Character Occupation: ${minion.data.occupation}</div>
              <div class="cartoon">Is a Cartoon?: ${minion.data.cartoon}</div>
              <div class="weapon">Character Weapon: ${minion.data.weapon}</div>
            </div>`
          document.querySelector('.characters-container').innerHTML = text
        })
        .catch(err => console.log(err))
    }

    oneMinion(id)

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const id = document.querySelector('.delete input').value


    function deleteMinion(minionId) {
      charactersAPI
        .deleteOneRegister(minionId)
        .then(minion => {
        })
        .catch(err => console.log(err))
    }
    deleteMinion(id)


  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
