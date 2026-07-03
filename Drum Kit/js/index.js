const BUTTONS = [
  {
    title: "A",
    text: "sound 1",
    urlSound: "./assets/sounds/boom.wav",
  },
  {
    title: "B",
    text: "sound 2",
    urlSound: "./assets/sounds/clap.wav",
  },
  {
    title: "C",
    text: "sound 3",
    urlSound: "./assets/sounds/hihat.wav",
  },
];

const drawButton = (button) => {
  return `<li class="drum__item flex">
						<button class="drum__item-btn flex">
							<h2 class="drum__item-title">${button.title}</h2>
							<p class="drum__item-paragraph">${button.text}</p>
						</button>
					</li>`;
};

const drawInterface = () => {
  const btnList = document.querySelector("#drum-list");
  const template = document.createElement("template");

  for (const btn of BUTTONS) {
    template.innerHTML = drawButton(btn).trim();
    createButton(template.content, btn.urlSound);
    btnList.appendChild(template.content);
  }
};

const createButton = (template, sound) => {
  const audio = new Audio(sound);
  const button = template.querySelector(".drum__item-btn");
  button.addEventListener("click", () => {
    audio.volume = 0.5;
    audio.currentTime = 0;
  audio.play();
  });
};

document.addEventListener('keydown', () => {
	
});

const main = () => {
  drawInterface();
};

main();
