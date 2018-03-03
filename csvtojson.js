d3.csv("./dji.csv", function(err, csv) {
  if (err) throw err;

  let base = document.querySelector("#content");
  base.textContent = JSON.stringify(csv);
});
