define(['d3', 'mock', 'external/rowHeight'], function (d3, mock) {
    "use strict";

    describe("rowHeight", function () {

        var underTest = Scrollgrid.prototype.rowHeight;

        beforeEach(function () {
            mock.init();
            d3.init();
        });

        it("should not refresh if true is passed to the 'silent' argument", function () {
            underTest.call(mock, 23, true);
            expect(mock.refresh).not.toHaveBeenCalled();
        });

        it("should return the column resizing value if no parameter is passed", function () {
            expect(underTest.call(mock)).toEqual(mock.vals.physRowHeight);
        });

        it("should update the column resizing value to a passed parameter", function () {
            underTest.call(mock, 13);
            expect(mock.properties.rowHeight).toEqual(13);
        });

        it("should return the context when a parameter is passed", function () {
            expect(underTest.call(mock, 13)).toEqual(mock);
        });

        it("should call refresh when a parameter is passed", function () {
            underTest.call(mock, 13);
            expect(mock.refresh).toHaveBeenCalled();
        });

        it("should not call refresh when a parameter is not passed", function () {
            underTest.call(mock);
            expect(mock.refresh).not.toHaveBeenCalled();
        });

    });

});