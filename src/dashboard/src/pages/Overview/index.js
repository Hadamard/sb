import React from 'react';
import './styles.css';




function HTMLDocumentation() {
  return (

    

<nav id="navbar">
<header>Hyperledger Documentation</header>
	<ul>
		<li><a className="nav-link" href="#HTML">HTML</a></li>
		<li><a className="nav-link" href="#Basic_Page_Structure">Basic Page Structure</a></li>
		<li><a className="nav-link" href="#Headings/Paragraphs">Headings/Paragraphs</a></li>
	
	</ul>
</nav>
<div id="main-doc">
	<section className="main-section" id="HTML" >
	<header>HTML</header>
		<p>HTML, a.k.a. Hyper Text Markup Language, defines the construction of webpages using markup. 
		The building blocks of HTML pages are HTML elements represented by tags. 
		An HTML element syntax generally begin with a start tag, content following, and close with an end tag. 
		Elements may have attributes specified in the start tag that provide additional information about an element.</p>
		<h3>Basic Element:</h3>
		<p><code>&lt;tagname&gt;Content&lt;/tagname&gt;</code></p>	
		<h3>Element with Attribute:</h3>
		<p><code>&lt;tagname attributename=”value”&gt;Content&lt;/tagname&gt;</code></p>
	</section>
	<hr>
	<section className="main-section" id="Basic_Page_Structure">
	<header>Basic Page Structure</header>
		<ul id="basic-elements">
			<li><code>&lt;!DOCTYPE html&gt;</code></li>
			<p>The first element in HTML document is the &lt;!DOCTYPE&gt;, which is required for browsers to display webpages correctly. 
			It is an example of an empty element, an element that does not need a closing tag.</p>
			<li><code>&lt;html&gt;</code></li>
			<p>The next element is the <code>&lt;html&gt;</code> element, the root element. 
			It contains a start and end tag that concludes the document.</p>
			<li><code>&lt;head&gt;</code></li>
			<p>After the <code>&lt;html&gt;</code> element, the <code>&lt;head&gt;</code> element follows with a start and end tag. 
			This element contains meta information about the document, 
			such as the <code>&lt;title&gt;</code> element that defines the document’s title. </p>
			<li><code>&lt;body&gt;</code></li>
			<p>The last basic document structure is the <code>&lt;body></code> element. 
			The visible page content is contained within this element.</p>
		</ul>
		<h3>Example:</h3>
		<div id="basic-ex"/>
		<p><code>&lt;!DOCTYPE html&gt;</code></p>
			<p><code>&lt;html&gt;</code></p>
			<p><code>&lt;head&gt;</code></p>
				<p><code>&lt;title&gt;Webpage Title&lt;/title&gt;</code></p>
			<p><code>&lt;/head&gt;</code></p>
			<p><code>&lt;body&gt;</code></p>
				<p><code>&lt;h1&gt;Hello World!&lt;/h1&gt;</code></p>
			<p><code>&lt;/body&gt;</code></p>
			<p ><code>&lt;/html&gt;</code></p>
		</div>
	</section>
	<hr>
	<section className="main-section" id="Headings/Paragraphs">
	<header id="hp_header">Headings/Paragraphs</header>
		<h2>Headings</h2>
		<p>Headings help to define a documents structure and make it easier to read. 
		They are used by search engines to catalog the structure and content of a web page. 
		Heading tags run from the most important <code>&lt;h1&gt;</code> to the least <code>&lt;h6&gt;</code> and include a start and end tag.</p>
		<h3>Heading Examples:</h3>
		<ul id="headings-list">
			<li><code>&lt;h1&gt;Heading 1&lt;/h1&gt;</code></li>
			<li><code>&lt;h2&gt;Heading 2&lt;/h2&gt;</code></li>
			<li><code>&lt;h3&gt;Heading 3&lt;/h3&gt;</code></li>
			<li><code>&lt;h4&gt;Heading 4&lt;/h4&gt;</code></li>
			<li><code>&lt;h5&gt;Heading 5&lt;/h5&gt;</code></li>
			<li><code>&lt;h6&gt;Heading 6&lt;/h6&gt;</code></li>
		</ul>
		<h2>Paragraphs</h2>
		<p>The element that defines a paragraph in HTML is the <code>&lt;p&gt;</code> element. 
		The display of a paragraph can be unpredictable. Adding extra spaces will not changes the results displayed, 
		the browser removes any extra spaces or lines. In order to preserve spaces and lines, the <code>&lt;pre&gt;</code> element is used.</p>
		<h3>Paragraph Example:</h3>
		<ul>
			<li>Code:</li>
		<div className="para-ex">	
		<p><code>&lt;p&gt;This is an example paragraph.</code></p>	
		<p><code>An example paragraph is this.</code></p>
		<p><code>A paragraph as an example.&lt;/p&gt;</code></p>
		</div>
			<li>Display:</li>
		<div className="para-ex">
		<p>This is an example paragraph. An example paragraph is this.
			A paragraph as an example.</p>
		</div>
		</ul>
		<h3>Preserve Paragraph Example:</h3>
		<ul>
			<li>Code:</li>
		<div className="para-ex">
		<p><code>&lt;pre&gt;This is a preserved example paragraph.</code></p>
		<p><code>A preserved paragraph example.</code></p>
		<p><code>Paragraph with spaces and lines preserved.&lt;/pre&gt;</code></p>
		</div>
			<li>Display:</li>
		<div className="para-ex">
		<pre>This is a preserved example paragraph.
A preserved paragraph example.
Paragraph with spaces and lines preserved.</pre>
		</div>
		</ul>
	</section>
	<hr>
	
</div>



export default HTMLDocumentation;
