import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
    const titleTest = 'Titulo de prueba';
    const urlTest = 'http://google.com/';

    test('Debe hacer match con el snapshot', () => {
        const {container}=render(<GifItem title={ titleTest } url={ urlTest} />);
        expect(container).toMatchSnapshot();
    });
    
    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={ titleTest } url={ urlTest} />);
        // screen.debug();
        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(urlTest);
        expect(alt).toBe(titleTest);
    });

    test('Debe mostrar el titulo', () => {
        render(<GifItem title={ titleTest } url={ urlTest} />);
        expect( screen.getByText( titleTest ) ).toBeTruthy();
    });
});
