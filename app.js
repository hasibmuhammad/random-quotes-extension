const getQuotes = async () => {
  try {
    const res = await fetch(
      "https://api.quotable.io/random?tags=technology,famous-quotes"
    );
    const data = await res.json();
    const { content, author } = data;
    const cEl = document.getElementById("content");
    const aEl = document.getElementById("author");

    cEl.innerHTML = content;
    aEl.innerHTML = "—" + author;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", () => {
  getQuotes();
});
