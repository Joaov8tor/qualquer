export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: "URL é obrigatória" });
    }

    try {
        const response = await fetch(`http://helya.pylex.xyz:10234/api/addlink?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao conectar com a API" });
    }
}
