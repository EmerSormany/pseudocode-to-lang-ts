import express from 'express';

const app = express();

app.use(express.json());

app.get('/exercicio1', (req, res) => {
    const {numero} = req.body as { numero:number };
    res.json({
        numero,
        antecessor: numero - 1,
        sucessor: numero + 1,
    });
});

app.get('/exercicio2', (req, res) => {
    const { distancia, combustivel } = req.body as { distancia:number, combustivel: number};
    const consumoMedio:number = distancia / combustivel;
    res.json({
        consumoMedio: consumoMedio.toFixed(2),
    });
});

app.get('/exercicio3', (req, res) => {
    const {numero} = req.body as { numero:number };
    const resto: number = numero % 3;
    res.json({
        resto
    });
});

app.get('/exercicio4', (req, res) => {
    const { a, b, c } = req.body as { a:number, b:number, c:number};
    const delta:number = b * b - 4 * a * c;
    if (delta < 0) {
        res.json({ mensagem: "A equação não possui raízes reais." });
    } else {
        const raiz1:number = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2:number = (-b - Math.sqrt(delta)) / (2 * a);
        res.json({
            raiz1: raiz1.toFixed(2),
            raiz2: raiz2.toFixed(2),
        });
    }
});

app.get('/exercicio5', (req, res) => {
    const {saque} = req.body as { saque:number };
    const notas50:number = Math.floor(saque / 50);
    let valor:number = saque % 50;
    const notas10:number = Math.floor(valor / 10);
    valor %= 10;
    const notas1:number = valor;

    res.json({
        valorSaque: req.body.saque,
        notas50,
        notas10,
        notas1,
    });
});

app.get('/exercicio6', (req, res) => {
    const { nota1, nota2, nota3 } = req.body as {nota1:number, nota2:number, nota3:number};
    const media:number = (nota1 + nota2 + nota3) / 3;

    let situacao:string = "Recuperação";
    if (media < 50) {
        situacao = "Reprovado";
    } else if (media >= 70) {
        situacao = "Aprovado";
    }

    res.json({
        media: media.toFixed(2),
        situacao,
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
