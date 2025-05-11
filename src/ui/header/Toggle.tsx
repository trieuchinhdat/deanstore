import { CiMenuBurger } from 'react-icons/ci'
import { TfiClose } from 'react-icons/tfi'
export default function Toggle() {
	return (
		<label className="[grid-area:toggle] md:hidden">
			<input id="header-toggle" type="checkbox" hidden />

			<span className="header-open:hidden">
				<CiMenuBurger />
			</span>
			<span className="header-closed:hidden">
				<TfiClose />
			</span>
		</label>
	)
}
