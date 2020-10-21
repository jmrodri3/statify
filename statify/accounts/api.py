from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests, uuid


@api_view(['GET'])
def login(request):
    if request.method == 'GET':
        return Response({'data': request.query_params})
    else:
        return Response({'message': 'not a get'}) 

@api_view(['POST', 'GET'])
def registerUser(request):
    if request.method == 'POST':
        state = uuid.uuid4()
        scopes = 'user-read-private user-read-email'
        headers = {

        }
        params = {
            'client_id' : 'CLIENT_ID',
            'response_type' : 'code',
            'redirect_uri' : 'localhost:8000/registerUser',
            'scope' : scopes,
            'state' : state,
        }
        response = requests.get('https://accounts.spotify.com/authorize', params, headers=headers)
        print(request.query_params)
        return Response(response)
    else:
        print(request)
        pass

