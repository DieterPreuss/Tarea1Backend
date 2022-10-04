import get from 'lodash/get';
import { useGetManyReference } from '../../dataProvider';
import { useNotify } from '../../notification';
/**
 * Fetch a reference record in a one-to-one relationship, and return it when available
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 *
 * const { data, isLoading, error } = useReferenceOneFieldController({
 *     record: { id: 7, name: 'James Joyce'}
 *     reference: 'bios',
 *     target: 'author_id',
 * });
 *
 * @typedef {Object} UseReferenceOneFieldControllerParams
 * @prop {Object} props.record The current resource record
 * @prop {string} props.reference The linked resource name
 * @prop {string} props.target The target resource key
 * @prop {string} props.source The key current record identifier ('id' by default)
 *
 * @returns {UseReferenceResult} The request state. Destructure as { referenceRecord, isLoading, error }.
 */
export var useReferenceOneFieldController = function (props) {
    var reference = props.reference, record = props.record, target = props.target, _a = props.source, source = _a === void 0 ? 'id' : _a;
    var notify = useNotify();
    var _b = useGetManyReference(reference, {
        target: target,
        id: get(record, source),
        pagination: { page: 1, perPage: 1 },
        sort: { field: 'id', order: 'ASC' },
        filter: {},
    }, {
        enabled: !!record,
        onError: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', {
                type: 'warning',
                messageArgs: {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                },
            });
        },
    }), data = _b.data, error = _b.error, isFetching = _b.isFetching, isLoading = _b.isLoading, refetch = _b.refetch;
    return {
        referenceRecord: data ? data[0] : undefined,
        error: error,
        isFetching: isFetching,
        isLoading: isLoading,
        refetch: refetch,
    };
};
//# sourceMappingURL=useReferenceOneFieldController.js.map