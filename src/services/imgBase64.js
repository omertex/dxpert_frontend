export default (img) => {
  console.log(img);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 32;
        canvas.height = 32;
        // img.width and img.height will contain the original dimensions
        ctx.drawImage(img, 0, 0, 32, 32);

        const b64 = canvas.toDataURL("image/png");
        resolve(b64);
      };
    };
    reader.onerror = (error) => {
      console.error(error);
      resolve("");
    };
  });
};
