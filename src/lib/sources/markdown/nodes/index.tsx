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
	blockquote: Blockquote,
	break: Break,
	code: Code,
	definition: Definition,
	delete: Delete,
	emphasis: Emphasis,
	footnoteDefinition: FootNoteDefinition,
	footnoteReference: FootNoteReference,
	heading: Heading,
	html: Html,
	image: Image,
	imageReference: ImageReference,
	inlineCode: InlineCode,
	link: Link,
	linkReference: LinkReference,
	list: List,
	listItem: ListItem,
	paragraph: Paragraph,
	strong: Strong,
	table: Table,
	tableCell: TableCell,
	tableRow: TableRow,
	text: Text,
	thematicBreak: ThematicBreak,
	yaml: Yaml,
};
