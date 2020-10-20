from rest_framework.decorators import api_view

@api_view(['GET'])
def login(request):
    if request.method == 'GET':
        return Response({'data': request.data})
    else:
        return Response({'message': 'not a get'}) 