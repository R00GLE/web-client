import { createMemoryHistory } from 'history';
import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import UsersList from "./List";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    const history = createMemoryHistory();
    act(() => {
        ReactDOM.createRoot(container).render(<MemoryRouter><UsersList history={history} /></MemoryRouter>);
    });
    expect(container.innerHTML).toMatch(/Create User<\/button>/);
});
