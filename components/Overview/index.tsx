import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Extension } from "interfaces";

type Props = {
    ext: Extension
}

export function Overview({ ext }: Props) {
    return (
        <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {ext.readme}
            </ReactMarkdown>
        </div>
    );
}
