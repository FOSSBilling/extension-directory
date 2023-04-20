import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Extension } from "interfaces";

type Props = {
    ext: Extension
}

export function Overview({ ext }: Props) {
    return (
        <ReactMarkdown children={ext.readme} remarkPlugins={[remarkGfm]} className="markdown-body" />
    );
}
