const React = require('react');
const HomeView = require('../view');
const { render, screen } = require('@testing-library/react');
const mockProducts = require('../../../../utils/mockProductsEI');

describe('Ejercicio 4 - La View de Home', () => {
    let component;
    const i18n = { gettext: text => text };
    beforeEach(() => {
        component = render(<HomeView i18n={i18n} title='Productos' products={[]}/>)
    })
    it('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();        
    })

    it('2) Muestra en pantalla un <h2> con la prop `title`', () => {
        const title = screen.getByText('Productos');
        expect(title).toBeInTheDocument();
    })
})

xdescribe('Ejericitación Integradora - La View de Home', () => {
    let component;
    const i18n = { gettext: text => text };
    beforeEach(() => {
        component = render(<HomeView i18n={i18n} title='Productos' products={mockProducts}/>)
    });

    it('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();        
    });

    it('2) Muestra un array de productos', () => {
        const products = screen.getAllByRole('listitem');
        expect(products.length).toBe(10);
    })
})