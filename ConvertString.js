document.getElementById("convert").onclick = () => {
  let beforeText = document.getElementById("before-text").value;
  let finalText = beforeText.replace("\n", "\\n")
                            .replace(/\t/g, "\\t")
                            .replace(/    /g, "\\t")
                            .replace(/"/g, "'");

  document.getElementById("after-text").value = finalText.split("\n").join("\\n").split("\t").join("\\t");
}
