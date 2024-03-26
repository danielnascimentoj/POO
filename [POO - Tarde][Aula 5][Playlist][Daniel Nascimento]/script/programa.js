let music1 = {
      Titulo: "A Ele a Glória",
      Artistas: "Ministério Apascentar de Louvor",
      Album: "Em Nome de Jesus",
      Poster: "img/img1.png"
    }

let music2 = {
      Titulo: "Nada Além do Sangue",
      Artistas: "Fernandinho",
      Album: "Uma Nova História",
      Poster: "img/img2.jpg"
    }

let music3 = {
      Titulo: "Rendido Estou",
      Artistas: "Aline Barros",
      Album: "Extraordinário Amor de Deus",
      Poster: "img/img3.png"
    }

let music4 = {
      Titulo: "Pai Nosso",
      Artistas: "Arieta magrine",
      Album: "Vem, Esta É a Hora",
      Poster: "img/img4.png"
    }

let music5 = {
      Titulo: "Lugar Secreto",
      Artistas: "Gabriela Rocha",
      Album: "Pra Onde Iremos?",
      Poster: "img/img5.png"
    }
let music6 = {
      Titulo: "Oceans (Where Feet May Fail)",
      Artistas: "Hillsong United",
      Album: "Zion",
      Poster: "img/img6.png"
    }

let music7 = {
      Titulo: "Deus É Deus",
      Artistas: "Delino Marçal",
      Album: "Nada É Igual",
      Poster: "img/img7.png"
    }

let music8 = {
      Titulo: "Eu Navegarei",
      Artistas: "Ana Nobrega",
      Album: "Adoração Profética",
      Poster: "img/img8.jpg"
    }

let music9 = {
      Titulo: "Pela Fé",
      Artistas: "André Valadão",
      Album: "Fé",
      Poster: "img/img9.png"
    }

let music10 = {
      Titulo: "Ressuscita-me",
      Artistas: "Aline Barros",
      Album: "Extraordinário Amor de Deus",
      Poster: "img/img10.png"
    }

    let playlist = []

    playlist.push(music1)
    playlist.push(music2)
    playlist.push(music3)
    playlist.push(music4)
    playlist.push(music5)
    playlist.push(music6)
    playlist.push(music7)
    playlist.push(music8)
    playlist.push(music9)
    playlist.push(music10)

    for (let i = 0; i < playlist.length; i++) {
        document.write(` 
        
        <div class="div-principal">

        <img src="${playlist[i].Poster}" alt="" height="400px">
    
        <div class="playlist">
                <div class="titulo">
                    <span class="titulo">${playlist[i].Titulo}</span>
                </div>

                <div class="artista">
                    <span class="artista">${playlist[i].Artistas}</span>
                </div>

                <div class="album">
                    <span class="album">${playlist[i].Album}</span>
                </div>
            </div>
            </div>
        `);
    }
    