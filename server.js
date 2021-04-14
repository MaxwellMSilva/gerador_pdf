const pdf = require('html-pdf');
const ejs = require('ejs');

ejs.renderFile('./index.ejs', (err, html) => {
    if (err) {
        console.log(err);
    } else {
        pdf.create(html, {}).toFile("./meupdf.pdf", (err, res) => {
            if (err) {
                console.log('Erro ao gerar PDF');
            } else {
                console.log('PDF gerado com sucesso');
            };
        });
    }
});
