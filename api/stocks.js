export default function handler(request, response) {
    const stocks = {
        LHV: "4.012",
        MERKO: "3.5",
        COOP: "1.2"
    };
response.status(200).json({stocks})
}
