const contenitoreCatalogo = document.getElementById('catalogo-card');
let htmlCard = '';
let i = 0
ortaggi.forEach(ortaggio => {
    i++
    console.log("prod_"+i+".jpg")
    let prezzoFormattato = ortaggio["Prezzo Unitario"].toFixed(2);
    htmlCard += `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card h-100 shadow border-1 card-ortaggio rounded-3 overflow-hidden">
                
                <div class="img-container">
                    <img src="img/prodotti/prod_${i}.jpg" class="card-img-top" alt="${ortaggio.Prodotto}" style="height:300px; object-fit: cover;">
                </div>
                
                <div class="card-body d-flex flex-column p-4">
                    
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <small class="text-muted fw-semibold">Cod. ${ortaggio.Codice}</small>
                        <span class="badge bg-secondary text-white text-secondary border rounded-pill px-2 py-1">IVA ${ortaggio["Aliquota IVA"]}</span>
                    </div>
                    
                    <h5 class="card-title text-success fw-bold fs-5 mb-3">${ortaggio.Prodotto}</h5>
                    
                    <div class="mt-auto"> 
                        <div class="p-3 bg-light rounded-3 d-flex justify-content-between align-items-center">
                            <span class="text-muted mb-0">Prezzo:</span>
                            <span class="fs-5 fw-bold text-dark">€ ${prezzoFormattato} <small class="text-muted fs-6">/ ${ortaggio["U.M."]}</small></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    `;
});
contenitoreCatalogo.innerHTML = htmlCard;