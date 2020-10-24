from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests, uuid
from secret_settings import ClientId as CLIENT_ID


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
        params = {
            'client_id' : CLIENT_ID,
            'response_type' : 'code',
            'redirect_uri' : 'localhost:3000/dashboard',
            'scope' : scopes,
            'state' : state,
        }
        response = requests.get('https://accounts.spotify.com/authorize', params, headers=headers)
        print(request.query_params)
        return Response(data=response.text, status=status.HTTP_200_OK)
    else:
        print(request)
        pass

