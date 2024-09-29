
export const updatePreview = (img, previewField, setValue) => {
    if (img && img.length > 0) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(img[0]);
        fileReader.addEventListener("load", function () {
            setValue(previewField, this.result);
        });
    }
};