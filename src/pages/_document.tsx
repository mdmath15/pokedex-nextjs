import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const originalRenderPage = ctx.renderPage

		// Run the React rendering logic synchronously
		ctx.renderPage = () =>
			originalRenderPage({
				// Useful for wrapping the whole react tree
				enhanceApp: (App) => App,
				// Useful for wrapping in a per-page basis
				enhanceComponent: (Component) => Component
			})

		// Run the parent `getInitialProps`, it now includes the custom `renderPage`
		const initialProps = await Document.getInitialProps(ctx)

		return {
			...initialProps,
			styles: initialProps.styles
		}
	}

	render() {
		return (
			<Html lang='pt-BR'>
				<Head>
					{CssBaseline.flush()}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
					<link
						href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
