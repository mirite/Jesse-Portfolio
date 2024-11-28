import type { Handlers } from "../types";

import { Blockquote } from "./Blockquote";
import { Break } from "./Break";
import { Code } from "./Code";
import { Definition } from "./Definition";
import { Delete } from "./Delete";
import { Emphasis } from "./Emphasis";
import { FootNoteDefinition } from "./FootNoteDefinition";
import { FootNoteReference } from "./FootNoteReference";
import { Heading } from "./Heading";
import { Html } from "./Html";
import { Image } from "./Image";
import { ImageReference } from "./ImageReference";
import { InlineCode } from "./InlineCode";
import { Link } from "./Link";
import { LinkReference } from "./LinkReference";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { Paragraph } from "./Paragraph";
import { Strong } from "./Strong";
import { Table } from "./Table";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow";
import { Text } from "./Text";
import { ThematicBreak } from "./ThematicBreak";
import { Yaml } from "./Yaml";

export const nodeHandlers: Handlers = {
	paragraph: Paragraph,
	text: Text,
	inlineCode: InlineCode,
	code: Code,
	break: Break,
	emphasis: Emphasis,
	strong: Strong,
	heading: Heading,
	image: Image,
	list: List,
	listItem: ListItem,
	link: Link,
	blockquote: Blockquote,
	definition: Definition,
	delete: Delete,
	footnoteDefinition: FootNoteDefinition,
	footnoteReference: FootNoteReference,
	html: Html,
	imageReference: ImageReference,
	linkReference: LinkReference,
	table: Table,
	tableCell: TableCell,
	tableRow: TableRow,
	thematicBreak: ThematicBreak,
	yaml: Yaml,
};
