fetch(new Request("assets/data/movies.json"))
    .then((result) => result.json())
    .then((result) => {
        let movies_container = document.getElementById("movies-container");
        movies = result.results.map(getFilmBloc);
        for (i of movies) {movies_container.append(i);}
    })

    function getFilmBloc(movies){
        let container = document.createElement("div")
        container.className = "col-12 col-md-4 col-lg-3";
        let description = movies.overview;
        container.innerHTML = 
        `
            <article class="card mb-3 border-0 ">
                <div class="row g-0 bg-secondary">
                    <div class="col-md-4">
                        <img src="${movies.poster_path}" class="img-fluid"></img>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-black text-center">${movies.original_title}</h5>
                            <p class="card-text text-black">${description}</p>
                            <p class="card-text stars"><small class="text-muted">${movies.vote_average}</small></p>
                        </div>
                    </div>
                </div>
            </article>
            ` ;
        return container
    }