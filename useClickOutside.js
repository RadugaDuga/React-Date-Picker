import { useEffect } from "react";

const useClickOutside = (action, ref, ref2 = null) => {
	useEffect(() => {
		let handler = (event) => {
			if (ref.current && !ref.current.contains(event.target) && (ref2 ? (ref2.current && !ref2.current.contains(event.target)):true)) {
				action();
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});
};

export default useClickOutside;
