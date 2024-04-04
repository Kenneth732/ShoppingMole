function handleFetchData(query = '') {
    return fetch(`http://localhost:3000/grosary?q=${query}`)
      .then((res) => res.json())
      .then((productDatas) => {
        return productDatas
          .filter((photo) => photo.title.toLowerCase().includes(query.toLowerCase()))
          .map(({ image, description, category,  id, title, rating }) => `
            <div class="cards" key=${id}>
              <div class="image">
                <img src="${image}" alt="${title}" class="img">
              </div>

              <p>${title}</p>
              <p>${category}</p>
                <h2>${description}</h2>
                <p>${rating.rate}</p>
                <p>${rating.count}</p>
                <div class="buttons">
                <button class="btn btn-primary" onclick="handleDecrement('${id}')">+</button>
                <button class="btn btn-primary" onclick="handleIncrement('${id}')">-</button>
            </div>
            </div>
          `).join(" ");
      });
  }
  
  const handleRenderUser = () => {
    handleFetchData()
      .then(userDataHTML => {
        const outputElement = document.querySelector('#output');
        outputElement.innerHTML = userDataHTML;
      });
  };
  handleRenderUser();
  
  
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFilter();
  });
  
  
  const handleFilter = () => {
    const inputValue = document.querySelector('#input').value;
    handleFetchData(inputValue)
      .then(filteredDataHTML => {
        const outputElement = document.querySelector('#output');
        outputElement.innerHTML = filteredDataHTML;
      });
  };
  
  let handleIncrement = (id) => {
    console.log("Click");
    handleArithmetic();
  }
  let handleDecrement = (id) => {
    console.log("Decrement")
    handleArithmetic();
  }
  let handleArithmetic = (id) => {
    console.log("Calculate total price")
  }


