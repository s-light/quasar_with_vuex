export default function () {
    return {
        globalMessage: 'Hello Sun',
        package_selected: 'car',
        package_options: [
            {
                label: 'boat',
                value: 'boat',
                icon: 'directions_boat'
            },
            {
                label: 'car',
                value: 'car',
                icon: 'directions_car'
            },
            {
                label: 'railway',
                value: 'railway',
                icon: 'directions_railway'
            }
        ]
    }
}
