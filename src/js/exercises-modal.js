const start = document.querySelector(".exersizes-card-btn");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".modal-button-close")

start.addEventListener('click', async(e) => {
    modal.classList.add('is-open');

    const cards = await fetchExercises();
    renderCard(cards);
});

btnClose.addEventListener('click', (e) => {
    modal.classList.remove('is-open');
});

async function fetchExercises() {
    const instance = axios.create({
        baseURL: 'https://energyflow.b.goit.study/api/',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            key: "exercises",
        }
    });
    try {
        const response = await instance.get('https://energyflow.b.goit.study/api/exercises/', { id });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getCardHTML = ({_id, bodyPart, equipment, gifUrl, name, target, description, rating, burnedCalories, popularity}) => `           
    <div class="modal-wrapper">
    <div class="modal-inner">
      <button class="modal-button-close" type="button">
        <svg class="modal-button-close-icon" width="24" height="24" aria-label="icon-close">
          <use href="./img/sprite.svg#cross"></use>
        </svg>
      </button>
      <div class="modal-content">
        <div class="modal-img">
        </div>

        <div class="modal-info">
          <h4 class="modal-title">Air bake</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">4.0</p>

            <ul class="modal-rating-list">
              <li>
                <svg class="modal-rating-icon" width="18" height="18" aria-label="icon-star">
                  <use href="./img/sprite.svg#star"></use>
                </svg>
              </li>
              <li>
                <svg class="modal-rating-icon" width="18" height="18" aria-label="icon-star">
                  <use href="./img/sprite.svg#star"></use>
                </svg>
              </li>
              <li>
                <svg class="modal-rating-icon" width="18" height="18" aria-label="icon-star">
                  <use href="./img/sprite.svg#star"></use>
                </svg>
              </li>
              <li>
                <svg class="modal-rating-icon" width="18" height="18" aria-label="icon-star">
                  <use href="./img/sprite.svg#star"></use>
                </svg>
              </li>
              <li>
                <svg class="modal-rating-icon" width="18" height="18" aria-label="icon-star">
                  <use href="./img/sprite.svg#star"></use>
                </svg>
              </li>
            </ul>
          </div>

          <ul class="modal-list">
            <li class="modal-list-item">
              <p class="modal-list-item-name">Target</p>
              <p class="modal-list-item-value">Abs</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Body Part</p>
              <p class="modal-list-item-value">Waist</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Equipment</p>
              <p class="modal-list-item-value">Body weight</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Popular</p>
              <p class="modal-list-item-value">150</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Burned calories</p>
              <p class="modal-list-item-value">323/3 min</p>
            </li>
          </ul>

          <p class="modal-description">This refers to your core muscles, which include the rectus abdominis,
            obliques, and transverse abdominis. They're
            essential for maintaining posture, stability, and generating force in many movements. Exercises that
            target the abs
            include crunches, leg raises, and planks.</p>

          <div class="modal-buttons">
            <button class="modal-button-favorites" type="button">Add to favorites
              <svg class="modal-button-favorites-icon" width="20" height="20" aria-label="heart-icon">
                <use href="./img/sprite.svg#heart"></use>
              </svg>
            </button>

            <button class="modal-button-rating">Give a rating</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`

function renderCard(cards) {
    if (cards === undefined) {
        return;
    } else {
        const markup = cards.map((card => {
            return getCardHTML(card);
        })).join("");
        modal.insertAdjacentHTML("beforeend", markup);
    }
}