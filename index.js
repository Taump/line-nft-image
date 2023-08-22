const Koa = require('koa');
const Router = require('@koa/router');
const svg2png = require("svg2png");

const app = new Koa();
const router = new Router();

router.get('/meta/:id', async (ctx) => {
	const id = ctx.request.params.id;

	ctx.type = "application/json";

	ctx.body = ({
		"name": `Loan #${id}`,
		"image": `https://blog-api.obby.space/image/${id}`,
		"description": `NFT token of ${id} loan`,
	});
});

router.get('/image/:id', async (ctx, next) => {
	const id = Number(ctx.request.params.id || 0);

	if(!id || id < 0 || id > 9999) {
		ctx.status = 400;
		ctx.body = "Bad request";
		return next();
	}

	const number = "0".repeat(4 - String(id).length) + String(id);

	const img = `<svg width="296" height="181" viewBox="0 0 296 181" fill="none" xmlns="http://www.w3.org/2000/svg">
		<style>
		.number {
			font: 48px serif;
			fill: #0281EB;
			letter-spacing: 5px;
		}
		</style>
		<path d="M60 1H10C4.47715 1 0 5.47715 0 11V61H60V1Z" fill="#030712"/>
		<path opacity="0.3" d="M0 16H60" stroke="#0281EB"/>
		<path opacity="0.3" d="M0 46H60" stroke="#0281EB"/>
		<path opacity="0.1" d="M29.9998 61V1" stroke="#0281EB"/>
		<path d="M119.203 1H59.2034V61H119.203V1Z" fill="#030712"/>
		<path opacity="0.3" d="M59.2034 16H119.203" stroke="#0281EB"/>
		<path opacity="0.3" d="M59.2034 46H119.203" stroke="#0281EB"/>
		<path opacity="0.1" d="M90.2034 61V1" stroke="#0281EB"/>
		<path d="M178.407 1H118.407V61H178.407V1Z" fill="#030712"/>
		<path opacity="0.3" d="M118.407 16H178.407" stroke="#0281EB"/>
		<path opacity="0.3" d="M118.407 46H178.407" stroke="#0281EB"/>
		<path opacity="0.1" d="M148.406 61V1" stroke="#0281EB"/>
		<path d="M237.61 1H177.61V61H237.61V1Z" fill="#030712"/>
		<path opacity="0.3" d="M177.61 16H237.61" stroke="#0281EB"/>
		<path opacity="0.3" d="M177.61 46H237.61" stroke="#0281EB"/>
		<path opacity="0.1" d="M207.61 61V1" stroke="#0281EB"/>
		<path d="M295.797 11C295.797 5.47715 291.319 1 285.797 1H235.797V61H295.797V11Z" fill="#030712"/>
		<path opacity="0.3" d="M235.797 16H295.797" stroke="#0281EB"/>
		<path opacity="0.3" d="M235.797 46H295.797" stroke="#0281EB"/>
		<path opacity="0.1" d="M265.797 61V1" stroke="#0281EB"/>
		<path d="M60 60.332H0V120.332H60V60.332Z" fill="#030712"/>
		<path opacity="0.3" d="M0 75.332H60" stroke="#0281EB"/>
		<path opacity="0.3" d="M0 105.332H60" stroke="#0281EB"/>
		<path opacity="0.1" d="M29.9998 120.332V60.332" stroke="#0281EB"/>
		<path d="M119.203 60.332H59.2031V120.332H119.203V60.332Z" fill="#030712"/>
		<path opacity="0.3" d="M59.2031 75.332H119.203" stroke="#0281EB"/>
		<path opacity="0.3" d="M58.5 105.332H119.203" stroke="#0281EB"/>
		<path opacity="0.1" d="M90.2031 120.332V60.332" stroke="#0281EB"/>
		<path d="M178.407 60.332H118.407V120.332H178.407V60.332Z" fill="#030712"/>
		<path opacity="0.3" d="M118.407 75.332H178.407" stroke="#0281EB"/>
		<path opacity="0.3" d="M118.407 105.332H178.407" stroke="#0281EB"/>
		<path opacity="0.1" d="M148.407 120.332V60.332" stroke="#0281EB"/>
		<path d="M237.61 60.332H177.61V120.332H237.61V60.332Z" fill="#030712"/>
		<path opacity="0.3" d="M177.61 75.332H237.813" stroke="#0281EB"/>
		<path opacity="0.3" d="M177.61 105.332H237.813" stroke="#0281EB"/>
		<path opacity="0.1" d="M207.712 120.332V60.332" stroke="#0281EB"/>
		<path d="M295.797 60.332H235.797V120.332H295.797V60.332Z" fill="#030712"/>
		<path opacity="0.3" d="M235.797 75.332H295.797" stroke="#0281EB"/>
		<path opacity="0.3" d="M235.797 105.332H295.797" stroke="#0281EB"/>
		<path opacity="0.1" d="M265.797 120.332V60.332" stroke="#0281EB"/>
		<path d="M60 119.667H0V169.667C0 175.19 4.47715 179.667 10 179.667H60V119.667Z" fill="#030712"/>
		<path opacity="0.3" d="M0 134.667H60" stroke="#0281EB"/>
		<path opacity="0.3" d="M0 164.666H60" stroke="#0281EB"/>
		<path opacity="0.1" d="M29.9998 179.667V119.667" stroke="#0281EB"/>
		<path d="M119.203 119.667H59.2031V179.667H119.203V119.667Z" fill="#030712"/>
		<path opacity="0.3" d="M59.2031 134.667H119.203" stroke="#0281EB"/>
		<path opacity="0.3" d="M59.2031 164.666H119.203" stroke="#0281EB"/>
		<path opacity="0.1" d="M90.2031 179.667V119.667" stroke="#0281EB"/>
		<path d="M178.407 119.667H118.407V179.667H178.407V119.667Z" fill="#030712"/>
		<path opacity="0.3" d="M118.407 134.667H178.407" stroke="#0281EB"/>
		<path opacity="0.3" d="M118.407 164.666H178.407" stroke="#0281EB"/>
		<path opacity="0.1" d="M148.406 179.667V119.667" stroke="#0281EB"/>
		<path d="M237.61 119.667H177.61V179.667H237.61V119.667Z" fill="#030712"/>
		<path opacity="0.3" d="M177.61 134.667H237.61" stroke="#0281EB"/>
		<path opacity="0.3" d="M177.61 164.666H237.61" stroke="#0281EB"/>
		<path opacity="0.1" d="M207.61 179.667V119.667" stroke="#0281EB"/>
		<path d="M295.797 119.667H235.797V179.667H285.797C291.32 179.667 295.797 175.19 295.797 169.667V119.667Z" fill="#030712"/>
		<path opacity="0.3" d="M235.797 134.667H295.797" stroke="#0281EB"/>
		<path opacity="0.3" d="M235.797 164.666H295.797" stroke="#0281EB"/>
		<path opacity="0.1" d="M265.797 179.667V119.667" stroke="#0281EB"/>
		<path d="M10 1H286C290.971 1 295 5.02944 295 10V171C295 175.971 290.971 180 286 180H10C5.02944 180 1 175.971 1 171V10C1 5.02944 5.02944 1 10 1Z" stroke="#0281EB" stroke-width="2"/>
		<path d="M70 120C86.5685 120 100 106.569 100 90C100 73.4315 86.5685 60 70 60C53.4315 60 40 73.4315 40 90C40 106.569 53.4315 120 70 120Z" stroke="#0281EB" stroke-width="3"/>
		<path d="M52.6924 83.0771H88.4616" stroke="#0281EB" stroke-width="3" stroke-linecap="round"/>
		<path d="M52.6924 96.9229H88.4616" stroke="#0281EB" stroke-width="3" stroke-linecap="round"/>
		<g>
			<text x="137" y="107" class="number">${number}</text>
		</g>
	</svg>			
	`;

	ctx.body = await svg2png(img, { width: 592, height: 362 });


	ctx.type = "image/png";
})

app
	.use(router.routes())

app.listen(3030);

