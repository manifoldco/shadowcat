import { newE2EPage } from '@stencil/core/testing';

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('my-component', () => {
  it('is sandboxed to only allow scripts', async () => {
    const page = await newE2EPage();

    await page.setContent('<manifold-oauth></manifold-oauth>');
    await page.waitForChanges();

    const iframe = await page.find('iframe');
    expect.assertions(1);
    if (iframe) {
      const sandbox = await iframe.getAttribute('sandbox');
      expect(sandbox).toEqual('allow-scripts allow-same-origin');
    }
  });

  it('iframe keeps essential styling for Firefox', async () => {
    const page = await newE2EPage();
    await page.setContent('<manifold-oauth></manifold-oauth>');
    await page.waitForChanges();
    const iframeStyling = await page.$eval('iframe', (elm: any) => ({
      border: elm.style.border,
      display: elm.style.display,
      height: elm.style.height,
      left: elm.style.left,
      margin: elm.style.margin,
      padding: elm.style.padding,
      pointerEvents: elm.style.pointerEvents,
      position: elm.style.position,
      userSelect: elm.style.userSelect,
      visibility: elm.style.visibility,
      width: elm.style.width,
    }));
    expect(iframeStyling).toEqual({
      border: 'none',
      display: 'block',
      height: '1px',
      left: '0px',
      margin: '0px',
      padding: '0px',
      pointerEvents: 'none',
      position: 'fixed',
      userSelect: 'none',
      visibility: 'hidden',
      width: '75vw',
    });
  });
});
