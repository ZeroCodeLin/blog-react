import Mock from 'mockjs'

Mock.mock('/api/test.json','GET',{
        data: {
            demo: 1
        }
    }
)