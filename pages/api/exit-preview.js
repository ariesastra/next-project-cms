
export default function Exit(_, res) {
    
    res.clearPreviewData()
    res.writeHead(307, { Location: '/' })
    res.end()
}