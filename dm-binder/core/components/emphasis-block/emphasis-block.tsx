import * as React from "react";
import { IEmphasisBlock } from "./interfaces/i-emphasis-block";

const EmphasisBlock = ({ children }: IEmphasisBlock) => {
    return <section className="emphasis-block">{children}</section>;
};

export { EmphasisBlock };
