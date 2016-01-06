define(['mock', 'dom/populatePanel'], function (mock) {
    "use strict";

    describe("populatePanel", function () {

        var underTest = Scrollgrid.prototype.internal.dom.populatePanel,
            mockDom;

        beforeEach(function () {
            mock.init();
            mockDom = mock.internal.dom;
        });

        it("should add an svg to the container and store it in svg", function () {
            var panel = underTest.call(mock);
            expect(mockDom.container.children.svg[0]).toBeDefined();
            expect(panel.svg).toEqual(mockDom.container.children.svg[0]);
        });

        it("should add a group to the panel svg and store it as transform", function () {
            var panel = underTest.call(mock);
            expect(panel.svg.children.g[0]).toBeDefined();
            expect(panel.transform).toEqual(panel.svg.children.g[0]);
        });

        it("should add a group to the transform group and store it as content", function () {
            var panel = underTest.call(mock);
            expect(panel.transform.children.g[0]).toBeDefined();
            expect(panel.content).toEqual(panel.transform.children.g[0]);
        });

    });
});